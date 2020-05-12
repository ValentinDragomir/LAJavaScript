// construim o noua aplicatie vue
var app = new Vue({
    el: '#app',
    data: {
        password: '',
        score: 0,
        message: 'none',
        messages: [
            'none',
            'very weak',
            'weak',
            'medium',
            'strong',
            'very strong'
        ]
    },
    methods: {
        evaluateScore: function() {
            // definim noul score initial egal cu 0
            let newScore = 0;
            // evaluam fiecare conditie dintre cele 5
            // adaugam 1 la noul score pentru fiecare conditie adevarata
            if(this.hasSmallLetter()) {
                newScore += 1;
            }
            if(this.hasUpperLetter()) {
                newScore += 1;
            }
            if(this.hasDigit()) {
                newScore += 1;
            }
            if(this.hasSpecialChar()) {
                newScore += 1;
            }
            if(this.isLongEnough()) {
                newScore += 1;
            }
            // inlocuim vechiul score cu noul score
            this.score = newScore
            // inlocuim mesajul cu noul mesaj asociat noului scor
            this.message = this.messages[newScore]
        },
        hasSmallLetter: function() {
            return /[a-z]/.test(this.password);
        },
        hasUpperLetter: function() {
            return /[A-Z]/.test(this.password);
        },
        hasDigit: function() {
            return /[0-9]/.test(this.password);
            // return /[\d]/.test(this.password);
        },
        hasSpecialChar: function() {
            return /[^a-zA-Z0-9]/.test(this.password);
        },
        isLongEnough: function() {
            return this.password.length >= 8;
        }
    }
});