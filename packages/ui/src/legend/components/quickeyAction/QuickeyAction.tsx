import { h } from "preact";
import { IAction } from "@quickey/core";
import Key from "../key/Key";

export interface IQuickeyActionProps {
    key: any;
    action: IAction;
}

export default function QuickeyAction(props: IQuickeyActionProps) {
    return (
        <div className="quickey-action">
            <div className="quickey-action-parts">
                {props.action.parts.map((k, i) => <Key key={i} keyName={k} type={props.action.type} includeBindingType={i < props.action.parts.length - 1} />)}
            </div>
            <div className="quickey-action-description">
                {props.action.description}
            </div>
        </div>
    );
}