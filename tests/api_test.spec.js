const {test, request} = require('@playwright/test');
const {api_function} = require('../utils/api_function.js');
const randomizer = require('../helper/randomizer.js');

let  api

test.beforeAll(async()=>
{
    const apiContext = await request.newContext();
    api = new api_function(apiContext);
});

test('GET - Get list users (@api @get_method )', async ({request})=>
{
    await api.getListUsers();
});

test('POST - Create users (@api @post_method )', async ({request})=>
{
    const data_user = {name : randomizer.RandomName(), job : 'QA Engineer'};

    await api.createUser(data_user);

});

test('PUT - Update data users (@api @put_method )', async ({request})=>
{
    const new_data_user = {name : randomizer.RandomName(), job : 'QA Engineer'};

    await api.updateUser(new_data_user);
});
