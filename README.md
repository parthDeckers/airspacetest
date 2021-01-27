# airspacetest

## What did i do?

First I did a fresh install of Cypress, and then got understanding of what I wanted to do with this assingment. I did a page object model style as I think it would be very benefitial when it comes to maintaince. The way i would do it is, i like to keep all of direct 'cy.' calls within pages folder, if i had time i would have made my own cyAction class with adding all of the direct cy calls in there. I would do that because if we were to change the framework to wdio, i would only have to change one class where all of the direct cy. calls are made.  With that being said, I also build a custom cypress command to demonstrate how that could be useful which is the only cy call i have used in component folder. I like to keep tests file as clean as posisible. I dont like to just put everything in test file due to maintance as well as redancency issue. I also like to keep data separated in its own folder, this comes in handy for when team needs to know certain creditials. I can go on more about this, but here is my page model follows pages -> component(use data here) -> tests. 

I also had time to connect this with ci/cd where if there is a push happens on this repo it would fire up a test. I would get report on my cypress dashboard but that can easily be pointed to anyone's dashboard with proper key.



 ## How to run this
 
 Step 1: This should be pulbic repo so you can clone or fork or simply download it. Navigate to that folder
 
 Step 2: Run ```npm install```
 
 Step 3.1: Run ```./node_modules/.bin/cypress open``` This should open up cypress window. Click on ``Run 3 integration specs`` It should run all of the test
 
 Step 3.3: Run ```./node_modules/.bin/cypress run``` This should run tests in back ground and you should get pass fail video/screenshots recording
 
 Step 3.4: Too much work to do, but we can simply change cypress key to point to anyones dashboard, see it running via github action on every commit which should be visible in cypress dashboard as well.
