import React, { Component, Children } from 'react';
import docs from './doc.json';
import './App.scss';

interface IFlags {
    isExported?: boolean;
}

interface IComment {
    shortText?: string;
}

interface IGroup {
    title: string;
    kind: number,
    children: number[];
}

interface IDocElement<T> {
    id: number;
    name: string;
    kind: number;
    flags: IFlags;
    children: T[];
    kindString?: string;
}

interface IDocumentation extends IDocElement<IModule> {
}

interface IModule extends IDocElement<IModuleElement> {
    originalName: string;
}

interface IModuleElement extends IDocElement<IModuleElement> {
    comment?: IComment;
    groups: IGroup[];
}

interface IModuleElement extends IDocElement<IModuleElement> {
    comment?: IComment;
}

export default class App extends Component {
    private documentation: IDocumentation;

    constructor(props: {}, context: unknown) {
        super(props, context);
        this.documentation = docs;
    }

    render() {
        return (
            <div className="app">
                <pre>
                    <code>
                        {docs.children.map(x =>
                            <div>
                                <div className="title">{x.name} {x.kindString}</div>
                                <ul className="types">
                                    {x.groups.map(x => <li>{x.title}</li>)}
                                </ul>
                                <ul>
                                    {JSON.stringify(x.children)}
                                </ul>
                                <hr/>
                            </div>
                        )}
                    </code>
                </pre>
            </div>
        );
    }
}