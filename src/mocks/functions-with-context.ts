import { Context } from './context';

export async function addUrl(url: string, nanoId: string, ctx: Context) {
	return await ctx.prisma.url.create({
		data: {
			nanoId,
			url,
		},
	});
}

export async function findUrl(nanoId: string | undefined, ctx: Context) {
	return await ctx.prisma.url.findFirst({
		where: { nanoId },
	});
}
