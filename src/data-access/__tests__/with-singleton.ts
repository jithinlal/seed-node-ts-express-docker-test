import { nanoid } from 'nanoid';
import { IUrl } from '~/interface/Url';
import { addUrl } from '~/mocks/functions-without-context';
import { prismaMock } from '~/mocks/singleton';

test('should create a url', async () => {
	const url = 'https://www.jithinlal.com';
	const nanoId = nanoid(10);

	const urlData: IUrl = {
		id: 1,
		url,
		nanoId,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	prismaMock.url.create.mockResolvedValue(urlData);

	await expect(addUrl(url, nanoId)).resolves.toMatchObject({
		id: expect.any(Number),
		url: expect.any(String),
		nanoId: expect.any(String),
		createdAt: expect.any(Date),
		updatedAt: expect.any(Date),
	});
});
