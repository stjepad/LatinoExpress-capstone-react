const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getUserSuggestionTrip: {
        value: (id) => {
            return fetch(`http://localhost:5002/establishments?userId=${id}&_expand=group`).then(e =>
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