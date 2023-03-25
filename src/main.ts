import * as fs from "https://deno.land/std@0.114.0/fs/mod.ts";
import * as path  from "https://deno.land/std@0.114.0/path/mod.ts";

function main() {
    const name = path.join(Deno.cwd(), "tsconfig.json");
    const file = Deno.openSync(name);
    const stat = file.statSync();
    const buf = new Uint8Array(stat.size);
    file.readSync(buf);
    const text = new TextDecoder().decode(buf);  // "hello world"
    file.close();

    console.log(text);
    console.log('hello, world!')
}

main();
