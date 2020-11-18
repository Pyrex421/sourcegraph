import classNames from 'classnames'
import CubeIcon from 'mdi-react/CubeIcon'
import React, { FunctionComponent, ReactNode } from 'react'
import { PageHeader } from '../../../../components/PageHeader'
import { LsifUploadFields } from '../../../../graphql-operations'

export interface CodeIntelUploadPageTitleProps {
    upload: LsifUploadFields
    actions?: ReactNode
    className?: string
}

export const CodeIntelUploadPageTitle: FunctionComponent<CodeIntelUploadPageTitleProps> = ({
    upload,
    actions,
    className,
}) => (
    <PageHeader
        icon={CubeIcon} // TODO - need an icon
        title={
            <>
                <span className="text-muted">Upload for commit</span>
                <span className="ml-2">
                    {upload.projectRoot ? upload.projectRoot.commit.abbreviatedOID : upload.inputCommit.slice(0, 7)}
                </span>
                <span className="ml-2 text-muted">indexed by</span>
                <span className="ml-2">{upload.inputIndexer}</span>
                <span className="ml-2 text-muted">rooted at</span>
                <span className="ml-2">{(upload.projectRoot ? upload.projectRoot.path : upload.inputRoot) || '/'}</span>
            </>
        }
        actions={actions}
        className={classNames('justify-content-end', className)}
    />
)
