import { DEFAULT_CONNECTION_CONFIG } from '../Defaults';
import { makeCommunitiesSocket } from './communities';
const makeWASocket = (config) => {
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    if (config.shouldSyncHistoryMessage === undefined) {
        newConfig.shouldSyncHistoryMessage = () => !!newConfig.syncFullHistory;
    }
    return makeCommunitiesSocket(newConfig);
};
export default makeWASocket;
