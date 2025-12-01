import { assertNodeErrorFree } from '../../WABinary';
export class USyncContactProtocol {
    name = 'contact';
    getQueryElement() {
        return {
            tag: 'contact',
            attrs: {}
        };
    }
    getUserElement(user) {
        return {
            tag: 'contact',
            attrs: {},
            content: user.phone
        };
    }
    parser(node) {
        if (node.tag === 'contact') {
            assertNodeErrorFree(node);
            return node?.attrs?.type === 'in';
        }
        return false;
    }
}
