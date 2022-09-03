import { prisma } from '~/db';

const addUrl = (url: string, nanoId: string) => {
	return prisma.url.create({
		data: {
			nanoId,
			url,
		},
	});
};

const findUrl = (nanoId: string | undefined) => {
	return prisma.url.findFirst({
		where: {
			nanoId,
		},
	});
};

export { addUrl, findUrl };
