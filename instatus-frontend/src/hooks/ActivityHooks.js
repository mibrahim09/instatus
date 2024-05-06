import {fetcher} from '@/api/fetcher'
import useSWR from 'swr'

export const fetchAllActivities = (page = 1, pageSize = 10, filter = '') => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSWR(encodeURI(`/events?page=${page}&pageSize=${pageSize}&filter=${filter}`), fetcher)
}