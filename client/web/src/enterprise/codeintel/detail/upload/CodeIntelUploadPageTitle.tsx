import classNames from 'classnames'
import React, { FunctionComponent, ReactNode } from 'react'
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
    <div className={classNames('d-flex flex-wrap align-items-center', className)}>
        <h2 className="flex-grow-1">
            <span className="text-muted">Upload for commit</span>
            <span className="ml-2">
                {upload.projectRoot ? upload.projectRoot.commit.abbreviatedOID : upload.inputCommit.slice(0, 7)}
            </span>
            <span className="ml-2 text-muted">indexed by</span>
            <span className="ml-2">{upload.inputIndexer}</span>
            <span className="ml-2 text-muted">rooted at</span>
            <span className="ml-2">{(upload.projectRoot ? upload.projectRoot.path : upload.inputRoot) || '/'}</span>
        </h2>
        {actions}
    </div>
)
