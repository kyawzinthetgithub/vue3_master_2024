/* eslint-env node */

import {fakerEN_US as faker} from "@faker-js/faker";
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPERBASE_URL, process.env.SERVICE_ROLE_KEY);

const seedProjects = async () =>{
  const name = faker.lorem.words(3);
  await supabase.from('projects').insert({
    name: name,
    slug: name.toLowerCase().replace(/ /g,'-'),
    status: faker.helpers.arrayElement(['in-progress','completed']),
    collaborators: faker.helpers.arrayElements([1,2,3])
  });
}

await seedProjects();
