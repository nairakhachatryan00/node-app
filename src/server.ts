import { getApp, PORT } from './app';

const server = () => {
    const app = getApp();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}
server();
