import { getApp } from './app';
const PORT = process.env.PORT || 3001;
const server = () => {
    const app = getApp();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}
server();
