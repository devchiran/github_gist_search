import axios from 'axios'

export function createStore() {
    return {
        gist: {
            isLoading: false,
            list: []
        },
        getGistlist(userID) {
            this.gist.list = []
            this.gist.isLoading = true;
            axios
                .get(`https://api.github.com/users/${userID}/gists`)
                .then(response => {
                    this.gist.list = response.data;
                })
                .catch(error => {
                    alert("Something went wrong. Please search again.")
                })
                .then(() => {
                    this.gist.isLoading = false
                })
        }
    }
}