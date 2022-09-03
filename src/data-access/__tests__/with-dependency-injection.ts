import { nanoid } from 'nanoid';
import { IUrl } from '~/interface/Url';
import { Context, createMockContext, MockContext } from '~/mocks/context';
import { addUrl } from '~/mocks/functions-with-context';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
	mockCtx = createMockContext();
	ctx = mockCtx as unknown as Context;
});

test('should create new url', async () => {
	const url = 'https://www.jithinlal.com';
	const nanoId = nanoid(10);

	const urlData: IUrl = {
		id: 1,
		url,
		nanoId,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	mockCtx.prisma.url.create.mockResolvedValue(urlData);

	await expect(addUrl(url, nanoId, ctx)).resolves.toEqual(urlData);
});
