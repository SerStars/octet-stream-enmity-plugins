function y(e){window.enmity.plugins.registerPlugin(e)}const p=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const w=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function g(e){return window.enmity.patcher.create(e)}const d={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,i)=>window.enmity.modules.filters.byName(e,i),byTypeName:(e,i)=>window.enmity.modules.filters.byTypeName(e,i),byDisplayName:(e,i)=>window.enmity.modules.filters.byDisplayName(e,i)};function f(...e){return window.enmity.modules.bulk(...e)}function h(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function u(e){return window.enmity.assets.getIDByName(e)}var S="FakeStickerFixed",b="1.1.2",k="Allows you to send stickers without Nitro. Fixed by octet-steam.",P=[{name:"mafu",id:"519760564755365888"},{name:"octet-steam",id:"263530950070239235"}],v={name:S,version:b,description:k,authors:P};const a=g("FakeSticker"),[N,C,T,c,D]=f(d.byProps("isSendableSticker"),d.byProps("getPremiumPacks","getAllGuildStickers","getStickerById"),d.byProps("getChannel"),d.byProps("sendMessage","sendStickers"),d.byProps("getChannelPermissions")),l=h("canUseCustomStickersEverywhere",{defaultExport:!1}),F=u("ic_clock"),_=u("Small"),$={...v,onStart(){async function e(i,m){w.open({key:"TOAST",content:"Processing Sticker...",icon:F});let o=new FormData;o.append("new-image-url",i);let t=await fetch("https://ezgif.com/apng-to-gif",{method:"POST",body:o}),n=t.url.split("/").pop();o=new FormData,o.append("file",n),t=await fetch(`https://ezgif.com/apng-to-gif/${n}?ajax=true`,{method:"POST",body:o});let s=await t.text(),r=`https:${s.split('<img src="')[1].split('" style=')[0]}`;n=r.split("/").pop(),o=new FormData,o.append("file",`${n}`),o.append("height","160"),t=await fetch(`https://ezgif.com/resize/${n}?ajax=true`,{method:"POST",body:o}),s=await t.text(),r=`https:${s.split('<img src="')[1].split('" style=')[0]}`,c.sendMessage(m,{content:r})}Object.isFrozen(l.default)&&(l.default={...l.default}),a.instead(l.default,"canUseCustomStickersEverywhere",(i,m,o)=>!0),a.after(N,"isSendableSticker",(i,m,o)=>!0),a.instead(c,"sendStickers",(i,m,o)=>{const t=T.getChannel(m[0]),n=C.getStickerById(m[1][0]);if(t.guild_id===n.guild_id)return o.apply(self,m);if(t.guild_id&&!D.can(p.Permissions.EMBED_LINKS,t))w.open({content:"Embed Link is disabled in this channel",source:_});else{const s=`https://media.discordapp.net/stickers/${n.id}.png`;if(n.format_type===1)return c.sendMessage(t.id,{content:`${s}?size=160`});if(n.format_type===2)e(s,t.id).then();else if(n.format_type===3)return c.sendMessage(t.id,{content:`https://raw.githubusercontent.com/m4fn3/RawStickers/master/${n.pack_id}/${n.id}.gif`})}})},onStop(){a.unpatchAll()}};y($);
