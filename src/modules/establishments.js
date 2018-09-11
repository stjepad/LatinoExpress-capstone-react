const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/establishments/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/establishments`).then(e => e.json())
        }
    },
    delete: {
        value: (id) => {
            return fetch(`${remoteURL}/establishments/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/establishments`).then(e => e.json()) })

        }
    },
    post: {
        value: function (newEstablishment) {
            return fetch(`${remoteURL}/establishments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEstablishment)
            }).then(e => e.json())
        }
    },
    patch: {
        value: function (id, editEstablishment) {
            return fetch(`${remoteURL}/establishments/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editEstablishment)
            }).then(e => e.json())
        }
    }
})