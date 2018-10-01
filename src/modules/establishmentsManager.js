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

    getAllfoodPoints: {
        value: function () {
            return fetch(`${remoteURL}/establishments?_sort=foodPoints&_order=desc&_limit=5`).then(e => e.json())
        }
    },
    getAlltacoPoints: {
        value: function () {
            return fetch(`${remoteURL}/establishments?_sort=tacoPoints&_order=desc&_limit=5`).then(e => e.json())
        }
    },
    getAllmargaritaPoints: {
        value: function () {
            return fetch(`${remoteURL}/establishments?_sort=margaritaPoints&_order=desc&_limit=5`).then(e => e.json())
        }
    },
    getAllquesoPoints: {
        value: function () {
            return fetch(`${remoteURL}/establishments?_sort=quesoPoints&_order=desc&_limit=5`).then(e => e.json())
        }
    },
    getAllburritoPoints: {
        value: function () {
            return fetch(`${remoteURL}/establishments?_sort=burritoPoints&_order=desc&_limit=5`).then(e => e.json())
        }
    },
    getAllsalsaPoints: {
        value: function () {
            return fetch(`${remoteURL}/establishments?_sort=salsaPoints&_order=desc&_limit=5`).then(e => e.json())
        }
    },


    getAllEstablishmentTypes: {
        value: function () {
            return fetch(`${remoteURL}/establishmentType`).then(e => e.json())
        }
    },
    getAllPaymentTypes: {
        value: function () {
            return fetch(`${remoteURL}/paymentType`).then(e => e.json())
        }
    },
    delete: {
        value: (id) => {
            return fetch(`${remoteURL}/establishments/${id}`, {
                method: "DELETE"
            })
                .then(() => { return fetch(`${remoteURL}/establishments`).then(e => e.json()) })

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