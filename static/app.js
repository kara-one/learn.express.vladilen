const App = {
    data() {
        return {
            servers: [],
            name: '',
        };
    },
    methods: {
        async remove(id) {
            fetch(`/api/server/${id}`, { method: 'DELETE' })
                .then((res) => res.json())
                .then(
                    (result) => {
                        this.servers = this.servers.filter((s) => s.id !== id);
                        console.log('result: ', result);
                    },
                    (error) => {
                        console.log('error: ', error);
                    },
                );
        },
        async createServer() {
            const data = {
                name: this.name,
                status: 'created',
            };

            fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then(
                    (result) => {
                        this.servers.push(result);
                        this.name = '';
                        console.log('createServer result: ', result);
                    },
                    (error) => {
                        console.log('createServer error: ', error);
                    },
                );
        },
    },
    async mounted() {
        // await fetch('/api/server')
        //     .then((res) => res.json())
        //     .then(
        //         (result) => {
        //             console.log('result: ', result);
        //             this.servers = result;
        //         },
        //         (error) => {
        //             console.log('error: ', error);
        //         },
        //     );

        const res = await fetch('/api/server');
        this.servers = await res.json();
    },
};

Vue.createApp(App).mount('#app');
