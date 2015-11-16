//Player name service
app.service('usernamePassing',
    function()
    {

        var user='';
        return{
            getUser :
                function () {
                    return user;
                },
            setUser :
                function (value) {
                    user = value;
                    //return user;
                }
        };
    }
)
//Banker amount passing

app.service('bankerAmountPassing',
    function()
    {

        var amt='';
        return{
            getAmt :
                function () {
                    return amt;
                },
            setAmt :
                function (value) {
                    amt = value;
                    //return amt;
                }
        };
    }
)

