// This file contains functions for saving and loading game data.

const storage = {
    saveData: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    loadData: function(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },

    clearData: function(key) {
        localStorage.removeItem(key);
    }
};