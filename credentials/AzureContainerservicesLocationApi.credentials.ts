import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureContainerservicesLocationApi implements ICredentialType {
        name = 'N8nDevAzureContainerservicesLocationApi';

        displayName = 'Azure Containerservices Location API';

        icon: Icon = { light: 'file:../nodes/AzureContainerservicesLocation/azure-containerservices-location.png', dark: 'file:../nodes/AzureContainerservicesLocation/azure-containerservices-location.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Containerservices Location API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
