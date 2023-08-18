export default () =>
{
    const config = useRuntimeConfig()

    const sendPostMessage = (data) => {

        if (process.client) {
            window.parent.postMessage(JSON.stringify(data), 'http://'+config.public.appDomain)
        }
    }

    return {
        sendPostMessage
    }
}