const { request, expect, get } = require("@playwright/test");
const exp = require("constants");

class api_function
{

constructor(apiContext)
{
    this.apiContext = apiContext;
}

async getListUsers(){
    let response
    let jsonResponse
    
    const get_endpoint = await this.apiContext.get('https://reqres.in/api/users?page=2',{
    });
    response = await get_endpoint;
    // Assert status code should be 200
    expect(response.status()).toBe(200);

    // Assert all data list of users is not null or empty and assert data type of each key
    jsonResponse = await get_endpoint.json()
    for (let x = 0; x < (jsonResponse.data).length; x++) {
        // Assert id of list of user should not null / empty
        expect(jsonResponse.data[x].id).not.toEqual(null);
        // Assert data type id of list of user should Number
        expect(typeof jsonResponse.data[x].id).toEqual(typeof Number());
        
        // Assert email of list of user should not null / empty
        expect(jsonResponse.data[x].email).not.toEqual(null);
        // Assert data type email of list of user should String
        expect(typeof jsonResponse.data[x].email).toEqual(typeof String());

        // Assert first name of list of user should not null / empty
        expect(jsonResponse.data[x].first_name).not.toEqual(null);
        // Assert data type first name of list of user should String
        expect(typeof jsonResponse.data[x].first_name).toEqual(typeof String());

        // Assert last name of list of user should not null / empty
        expect(jsonResponse.data[x].last_name).not.toEqual(null);
        // Assert data type last name of list of user should String
        expect(typeof jsonResponse.data[x].last_name).toEqual(typeof String());

        // Assert avatar of list of user should not null / empty
        expect(jsonResponse.data[x].avatar).not.toEqual(null);
        // Assert data type avatar of list of user should String
        expect(typeof jsonResponse.data[x].avatar).toEqual(typeof String());
    }
}

async createUser(data_user) {
    let response
    let jsonResponse

    const post_endpoint =  await this.apiContext.post('https://reqres.in/api/users',{
        data: {
                "name": `${await data_user.name}`,
                "job": `${await data_user.job}`
              }
        });
        response = await post_endpoint;

        // Assert status code should be 201
        expect(response.status()).toBe(201);

        // Assert all data new user
        jsonResponse = await post_endpoint.json()
        expect(jsonResponse.name).toEqual(await data_user.name);
        expect(jsonResponse.job).toEqual(await data_user.job);

        // Assert created time should not null / empty
        expect(jsonResponse.createdAt).not.toEqual(null);
        // Assert data type created time should String
        expect(typeof jsonResponse.createdAt).toEqual(typeof String());
}

async updateUser(new_data_user) {
    let response
    let jsonResponse

    const put_endpoint =  await this.apiContext.put('https://reqres.in/api/users/2',{
        data: {
                "name": `${await new_data_user.name}`,
                "job": `${await new_data_user.job}`
              }
        });
        response = await put_endpoint;

        // Assert status code should be 200
        expect(response.status()).toBe(200);

        // Assert all data new user
        jsonResponse = await put_endpoint.json()
        expect(jsonResponse.name).toEqual(await new_data_user.name);
        expect(jsonResponse.job).toEqual(await new_data_user.job);

        // Assert created time should not null / empty
        expect(jsonResponse.updatedAt).not.toEqual(null);
        // Assert data type created time should String
        expect(typeof jsonResponse.updatedAt).toEqual(typeof String());
}

}
module.exports = {api_function};