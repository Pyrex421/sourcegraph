import DeleteIcon from 'mdi-react/DeleteIcon'
import React, { FunctionComponent } from 'react'
import { ErrorLike } from '../../../../../../shared/src/util/errors'

export interface CodeIntelDeleteUploadProps {
    deleteUpload: () => Promise<void>
    deletionOrError?: 'loading' | 'deleted' | ErrorLike
}

export const CodeIntelDeleteUpload: FunctionComponent<CodeIntelDeleteUploadProps> = ({
    deleteUpload,
    deletionOrError,
}) => (
    <button
        type="button"
        className="btn btn-danger"
        onClick={deleteUpload}
        disabled={deletionOrError === 'loading'}
        aria-describedby="upload-delete-button-help"
        data-tooltip="Deleting this upload makes it immediately unavailable to answer code intelligence queries."
    >
        <DeleteIcon className="icon-inline" /> Delete upload
    </button>
)
