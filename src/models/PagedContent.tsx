export interface PagedContent<T> {
    page: number
    size: number
    totalElements: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    isFirst: boolean
    isLast: boolean
    data: T[]
}