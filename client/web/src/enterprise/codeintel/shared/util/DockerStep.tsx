import React, { FunctionComponent } from 'react'

export interface DockerStepProps {
    step: {
        root: string
        image: string
        commands: string[]
    }
}

export const DockerStep: FunctionComponent<DockerStepProps> = ({ step }) => (
    <li className="list-group-item">
        <code>
            <strong>{step.image}</strong> {step.commands.join(' ')}
        </code>
        <span className="text-muted">@</span>/{step.root}
    </li>
)
