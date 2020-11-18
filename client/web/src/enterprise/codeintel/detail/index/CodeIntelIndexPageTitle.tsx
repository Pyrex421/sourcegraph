import classNames from 'classnames'
import CubeIcon from 'mdi-react/CubeIcon'
import React, { FunctionComponent, ReactNode } from 'react'
import { PageHeader } from '../../../../components/PageHeader'
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
    <PageHeader
        icon={CubeIcon} // TODO - need an icon
        title={
            <>
                <span className="text-muted">Auto-index record for commit</span>
                <span className="ml-2">
                    {index.projectRoot ? index.projectRoot.commit.abbreviatedOID : index.inputCommit.slice(0, 7)}
                </span>
            </>
        }
        actions={actions}
        className={classNames('justify-content-end', className)}
    />
)
