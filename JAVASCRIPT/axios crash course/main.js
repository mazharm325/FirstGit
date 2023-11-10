// GLObal for token
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1haGFyIiwiaWF0IjoxNTE2MjM5MDIyfQ.CDHL5mgDQNFLEJjgFSTTq0e7nL2xmUy9bZKgV335LlQ';
// get request
function getTodos() {
    console.log('get request');
    // axios({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/todos',
    //         params: {
    //             _limit: 5
    //         }
    //     })

    // OR 
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', { timeout: 5000 })
        //.then(res => console.log(res))
        .then(res => showOutput(res))
        .catch(err => console.log(err));


}

// POST REQUEST
function addTodo() {
    console.log('POST Request');
    // axios({
    //         method: 'post',
    //         url: 'https://jsonplaceholder.typicode.com/todos',
    //         data: {
    //             title: 'new data',
    //             completed: false
    //         }
    //     })
    // or
    axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: 'mak todo',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
//put update replace entire resource
// patch update do incremently
function updateTodo() {
    console.log('PUT/PATCH Request');
    //axios.put('https://jsonplaceholder.typicode.com/todos/1')
    axios.patch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}


// DELETE REQUEST
function removeTodo() {
    console.log('DELETE Request');
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.error(err));

}

// SIMULTANEOUS DATA
function getData() {
    console.log('Simultaneous Request');
    axios.all([
            axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
            axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        ])
        // .then(res => {
        //     console.log(res[0]);
        //     console.log(res[1]);
        //     showOutput(res[0]);
        // })
        .then(axios.spread((todos, posts) => showOutput(posts)))
        .catch(err => console.error(err));

}

// CUSTOM HEADERS
// validate token on login

function customHeaders() {
    console.log('Custom Headers');
    const config = {
            headers: {
                'Content-Type': 'application/json',
                Authoriation: 'some Token value'
            }
        }
        // in post we have 3 parameter 1 url, 2 data , 3 config data for auth.
    axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: 'mak todo',
            completed: false
        }, config)
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    console.log('Transform Response');
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'hello mazhar'
        },

        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })
    }

    axios(options).then(res => showOutput(res))

}

// ERROR HANDLING
function errorHandling() {
    console.log('Error Handling');
    // insert wrong url for 404 erroe 
    axios
        .get('https://jsonplaceholder.typicode.com/todoss', {
            // validateStatus: function(status) {
            //     return status < 500;
            // }
        })
        //.then(res => console.log(res))
        .then(res => showOutput(res))
        .catch(err => {
            if (err.response) {
                // server reponded with a status other than 200 range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);

                if (err.response.status === 404) {
                    alert('Error: Page not found');
                }
            } else if (err.request) {
                //request was made but no response
                console.error(err.request);
            } else {
                console.error(err.message);
            }
        });

}

// CANCEL TOKEN
function cancelToken() {
    console.log('Cancel Token');
    const source = axios.CancelToken.source();

    axios
        .get('https://jsonplaceholder.typicode.com/todos', {
            cancelToken: source.token
        })
        .then(res => showOutput(res))
        .catch(thrown => {
            if (axios.isCancel(thrown)) {
                console.log('request cancelled', thrown.message);
            }
        });

    if (true) {
        source.cancel('Request Cancelled.')
    }

}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
        console.log(`${config.method.toUpperCase()} request sent at ${config.url}at time - ${new Date().getTime()}`);

        return config
    }, error => {
        return Promise.reject(error);
    }

);


// AXIOS INSTANCES

const axiosInstance = axios.create({
    //other custom settings
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.get('/comments').then(res => showOutput(res));

// showOutput method to pirnt result/ouput on browser

function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class= 'card card-body mb-4'>4
        <h5>Status: ${res.status}</h5>
    </div>

    <div class='card mt-3'>
        <div class='card-header'>
            HEADERS
        </div>
        <div class='card-body'
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
    </div>

    <div class='card mt-3'>
        <div class='card-header'>
            DATA
        </div>
        <div class='card-body'
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
    </div>

    <div class='card mt-3'>
    <div class='card-header'>
        CONFIG
    </div>
    <div class='card-body'
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
</div>

    
    `;
}

//event listener
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
//document.getElementById('get').addEventListener('click', getTodos);
//document.getElementById('get').addEventListener('click', getTodos);