const btn = document.getElementsByClassName('btn btn-get');

// user clicks a button
function Name()
{
    // the email html page opens;
    window.location.href = "mailto: bigchief@nottheboredroom.co.za?subject=Enquiry%20about%20your%20services";
}

            // back arrow takes user back to home page
            function back()
            {
                window.location.href = "index.html";
            }

                function sidebar()
                {
                    document.getElementById('sidebar').style.display = 'flex';
                }

                    function cl()
                    {
                        document.getElementById('sidebar').style.display = 'none';
                    }