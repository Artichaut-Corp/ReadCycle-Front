import { defineMiddleware } from "astro/middleware";
import { pb } from "../pocketbase";

export const onRequest = defineMiddleware(
  async ({ locals, request }: any, next: () => any) => {
    locals.pb = pb;

    // load the store data from the request cookie string
    locals.pb.authStore.loadFromCookie(request.headers.get("cookie") || "");

    try {
      // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
      locals.pb.authStore.isValid && (await locals.pb.collection("users").authRefresh());
      console.log("On a les infos");
      
    } catch (_) {
      // clear the auth store on failed refresh
      locals.pb.authStore.clear();
      console.log("Aucunes info par ici")
    }

    const response = await next();

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append("set-cookie", locals.pb.authStore.exportToCookie());

    return response;
  },
);
