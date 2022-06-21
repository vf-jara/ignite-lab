import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4okk1xw0fcp01xldpzj66yt/master',
    cache: new InMemoryCache()
})