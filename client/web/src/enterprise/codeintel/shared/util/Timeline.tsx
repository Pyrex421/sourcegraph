import classNames from 'classnames'
import { formatDistance } from 'date-fns/esm'
import CheckIcon from 'mdi-react/CheckIcon'
import ClockFastIcon from 'mdi-react/ClockFastIcon'
import ClockStartIcon from 'mdi-react/ClockStartIcon'
import CloseIcon from 'mdi-react/CloseIcon'
import React, { FunctionComponent, useMemo } from 'react'
import { Timestamp } from '../../../../components/time/Timestamp'
import { LsifIndexFields, LSIFIndexState, LsifUploadFields, LSIFUploadState } from '../../../../graphql-operations'

export interface TimelineNode {
    state?: LsifIndexFields['state'] | LsifUploadFields['state']
    queuedAt?: string | null
    uploadedAt?: string | null
    startedAt?: string | null
    finishedAt?: string | null
}

const isCompleted = (node: TimelineNode): boolean =>
    node.state === LSIFUploadState.COMPLETED || node.state === LSIFIndexState.COMPLETED

export interface TimelineProps {
    node: TimelineNode
    now?: () => Date
    className?: string
}

export const Timeline: FunctionComponent<TimelineProps> = ({ node, now, className }) => {
    const stages = useMemo(
        () => [
            { icon: <ClockStartIcon />, text: 'Queued', date: node.queuedAt, className: 'success' },
            { icon: <ClockStartIcon />, text: 'Uploaded', date: node.uploadedAt, className: 'success' },
            { icon: <ClockFastIcon />, text: 'Began processing', date: node.startedAt, className: 'success' },
            {
                icon: isCompleted(node) ? <CheckIcon /> : <CloseIcon />,
                text: isCompleted(node) ? 'Finished' : 'Failed',
                date: node.finishedAt,
                className: isCompleted(node) ? 'success' : 'failure',
            },
        ],
        [node]
    )

    return (
        <>
            <h3>Timeline</h3>

            <div className={className}>
                {stages.map((stage, index) => {
                    const dates = stages.map(stage => stage.date).filter((date, index__) => !!date && index__ < index)
                    const previousDate = dates.length > 0 ? dates[dates.length - 1] : undefined

                    return (
                        stage.date && (
                            <>
                                {previousDate && (
                                    <div className="d-flex align-items-center">
                                        <div className="flex-0">
                                            <div className="executor-timeline-task-separator" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-muted ml-4">
                                                {formatDistance(new Date(stage.date), new Date(previousDate))}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="d-flex align-items-center">
                                    <div className="flex-0 m-2">
                                        <div className={classNames('executor-timeline-icon', stage.className)}>
                                            {stage.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        {stage.text} <Timestamp date={stage.date} now={now} noAbout={true} />
                                    </div>
                                </div>
                            </>
                        )
                    )
                })}
            </div>
        </>
    )
}
