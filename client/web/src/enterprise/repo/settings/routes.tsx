import * as React from 'react'
import { Redirect, RouteComponentProps } from 'react-router'
import { repoSettingsAreaRoutes } from '../../../repo/settings/routes'
import { RepoSettingsAreaRoute } from '../../../repo/settings/RepoSettingsArea'
import { lazyComponent } from '../../../util/lazyComponent'
import { CodeIntelUploadsPageProps } from '../../codeintel/list/upload/CodeIntelUploadsPage'
import { CodeIntelIndexesPageProps } from '../../codeintel/list/index/CodeIntelIndexesPage'
import { CodeIntelIndexPageProps } from '../../codeintel/detail/index/CodeIntelIndexPage'
import { CodeIntelUploadPageProps } from '../../codeintel/detail/upload/CodeIntelUploadPage'
import { RepoSettingsPermissionsPageProps } from './RepoSettingsPermissionsPage'

const RepoSettingsPermissionsPage = lazyComponent<RepoSettingsPermissionsPageProps, 'RepoSettingsPermissionsPage'>(
    () => import('./RepoSettingsPermissionsPage'),
    'RepoSettingsPermissionsPage'
)
const CodeIntelUploadsPage = lazyComponent<CodeIntelUploadsPageProps, 'CodeIntelUploadsPage'>(
    () => import('../../codeintel/list/upload/CodeIntelUploadsPage'),
    'CodeIntelUploadsPage'
)
const CodeIntelUploadPage = lazyComponent<CodeIntelUploadPageProps, 'CodeIntelUploadPage'>(
    () => import('../../codeintel/detail/upload/CodeIntelUploadPage'),
    'CodeIntelUploadPage'
)
const CodeIntelIndexesPage = lazyComponent<CodeIntelIndexesPageProps, 'CodeIntelIndexesPage'>(
    () => import('../../codeintel/list/index/CodeIntelIndexesPage'),
    'CodeIntelIndexesPage'
)
const CodeIntelIndexPage = lazyComponent<CodeIntelIndexPageProps, 'CodeIntelIndexPage'>(
    () => import('../../codeintel/detail/index/CodeIntelIndexPage'),
    'CodeIntelIndexPage'
)

export const enterpriseRepoSettingsAreaRoutes: readonly RepoSettingsAreaRoute[] = [
    ...repoSettingsAreaRoutes,
    {
        path: '/permissions',
        exact: true,
        render: props => <RepoSettingsPermissionsPage {...props} />,
    },
    {
        path: '/code-intelligence/uploads',
        exact: true,
        render: props => <CodeIntelUploadsPage {...props} />,
    },
    {
        path: '/code-intelligence/uploads/:id',
        exact: true,
        render: props => <CodeIntelUploadPage {...props} />,
    },
    {
        path: '/code-intelligence/indexes',
        exact: true,
        render: props => <CodeIntelIndexesPage {...props} />,
    },
    {
        path: '/code-intelligence/indexes/:id',
        exact: true,
        render: props => <CodeIntelIndexPage {...props} />,
    },
    {
        path: '/code-intelligence/lsif-uploads/:id',
        exact: true,
        render: ({
            match: {
                params: { id },
            },
        }: RouteComponentProps<{ id: string }>) => <Redirect to={`../uploads/${id}`} />,
    },
]
