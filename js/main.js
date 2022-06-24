const app = new Vue({
    el: '#app',
    data: {
        students: [],
        studentTop: null,
    },
    created() {
        axios.get('http://localhost:8888/php-api/api.php')
        .then((response) => {
            this.students = response.data;
        })
        .catch((error) => {
            console.log(error);
        });

        axios.get('http://localhost:8888/php-api/api.php', {
            params: {
                index: 2
            }
        })
        .then((response) => {
            this.studentTop = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
});