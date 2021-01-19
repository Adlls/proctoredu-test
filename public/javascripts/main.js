      
      // create Supervisor instance
      let supervisor = new Supervisor({ url: 'https://demo.proctoring.online' });
      let tokenPromise =  fetch('https://localhost:3000/login');
      function initSession() {
          console.log("init session");
          // log in and initialize the session
        supervisor.init({
            // set your provider name
            provider: 'jwt',
            // get JWT string from your server
            token: tokenPromise.then(function(response) {
              if (response.ok) {
                return response.text();
              }
              else throw Error('Failed to get JWT');
            })
          })
          .then(function() {
            // start the session only after initialization
            console.log("start proctoring");
            return supervisor.start();
          })
          .catch(function(err) {
            // show alert with an error
            alert(err.toString());
                //redirect to home page
                location.href = '/';
            });
      }


     async function stopSession() {
            //stop the session after testing in e-learning system is over

            initSession();
            //stop the session after testing in e-learning system is over
            supervisor.stop();

         /*
         supervisor.init({
             // set your provider name
             provider: 'jwt',
             // get JWT string from your server
             token: tokenPromise.then(function(response) {
                 if (response.ok) {
                     return response.text();
                 }
                 else throw Error('Failed to get JWT');
             })
         })
             .then(function() {
                 // start the session only after initialization
                 console.log("stop proctoring");
                 return supervisor.stop();
             })
             .catch(function(err) {
                 // show alert with an error
                 alert(err.toString());
                 //redirect to home page
                 //location.href = '/';
             });
          */
         /*
         await supervisor.stop().then(res => {
                console.log(res);
            }).catch(err => {
                console.error(err);
            });
            console.log("logout");
           await supervisor.logout().then(res => {
                console.log(res);
            }).catch(err => {
                console.error(err);
            });
          */
      }
