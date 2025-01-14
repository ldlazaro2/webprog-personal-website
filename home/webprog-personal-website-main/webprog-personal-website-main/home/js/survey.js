const feedbackApp = Vue.createApp({
    data() {
        return {
            feedback: '',
            submitted: false,
        };
    },
    methods: {
        submitFeedback() {
            this.submitted = true;
            alert('Thank you for your feedback!');
        },
    },
});
feedbackApp.mount('#feedback');

