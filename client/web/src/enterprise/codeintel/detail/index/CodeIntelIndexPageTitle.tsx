import classNames from 'classnames'
import React, { FunctionComponent, ReactNode } from 'react'
import { LsifIndexFields } from '../../../../graphql-operations'

export interface CodeIntelIndexPageTitleProps {
    index: LsifIndexFields
    actions?: ReactNode
    className?: string
}

export const CodeIntelIndexPageTitle: FunctionComponent<CodeIntelIndexPageTitleProps> = ({
    index,
    actions,
    className,
}) => (
    <div className={classNames('d-flex flex-wrap align-items-center', className)}>
        <h2 className="flex-grow-1">
            <span className="text-muted">Auto-index record for commit</span>
            <span className="ml-2">
                {index.projectRoot ? index.projectRoot.commit.abbreviatedOID : index.inputCommit.slice(0, 7)}
            </span>
        </h2>
        {actions}
    </div>
)
