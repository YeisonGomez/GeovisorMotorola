import { environment } from '../../../environments/environment';

export class MotorolaAuth {
	
    public static client_id: string = "todd"; 
    public static client_secret: string = "Password1"; 
    public static callback_url: string = "http://localhost/"; 
    public static scopes: string = "msi_unsapi_groupmgt.read msi_unsapi_groupmgt.write msi_unsapi_presence.watch msi_unsapi_location.watch msi_unsapi_messaging";
    public static urlAuthLogin: string = `${ environment.serverUrl['motorola_auth'] }/authorization.oauth2?client_id=${MotorolaAuth.client_id}&response_type=code&redirect_uri=${ MotorolaAuth.callback_url }&scope=${MotorolaAuth.scopes}&client_secret=${MotorolaAuth.client_secret}`;
}