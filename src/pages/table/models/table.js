export default {
    namespace: 'tableDemo',
    state:{
        text:'',
        tableData:[]
    },
    subscription: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/example') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },
    effects: {
        *fetch({payload},{call,put}){
            yield put({
                type: 'save',payload:{
                    text: 'page init'
                }
            })
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
}