// express是套件喔
const express = require('express');
// 建立物件中~
const app = express();
// 路由設定
app.get('/', (req, res)=>{
    res.send('<h2>Hola(´・ω・`)...(`・ω・´)</h2>');
});
// 監聽你全家
app.listen(3001, ()=>{
    console.log('伺服器已啟動...(`・ω・´)');
})