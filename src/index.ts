import app from './app';

app.listen(app.get("port"), () => {
    console.log(`Nutrition API is running at ${app.get('host')}:${app.get('port')}`);
});
