const remoteURL = "https://maiz-server.herokuapp.com"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/messages/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (id) {
            return fetch(`${remoteURL}/messages?establishmentID=${id}`).then(e => e.json())
        }
    },

    getAllAll: {
        value: function () {
            return fetch(`${remoteURL}/messages`).then(e => e.json())
        }
    },
    delete: {
        value: (id) => {
            return fetch(`${remoteURL}/messages/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/messages`).then(e => e.json()) })

        }
    },
    post: {
        value: function (newMessage) {
            return fetch(`${remoteURL}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            }).then(e => e.json())
        }
    },
    patch: {
        value: function (id, editMessage) {
            return fetch(`${remoteURL}/messages/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editMessage)
            }).then(e => e.json())
        }
    }
})