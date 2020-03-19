using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Applicaion-Error", message);
            response.Headers.Add("Access-Controle-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-cControle-Allow-Origin", "*");
            
        }
    }
}