const remoteURL = "https://maiz-server.herokuapp.com"

export default Object.create(null, {
    getUserSuggestionTrip: {
        value: (id) => {
            return fetch(`${remoteURL}/establishments?userId=${id}&_expand=group`).then(e =>
                e.json()
            );
        }
    },
    patch: {
        value: function (id, editVote) {
            return fetch(`${remoteURL}/establishments/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editVote)
            }).then(e => e.json())
        }
    }
})