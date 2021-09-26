/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StatusCollection } from '../collections';
import { exportProxyModel } from '../exportModule';
import { Wid } from '../misc';
import {
  Model,
  ModelOptions,
  ModelPropertiesContructor,
  ModelProxy,
} from './Model';

interface Props {
  id: Wid;
  status?: any;
}

interface Session {
  stale?: any;
}

interface Derived {}

/**
 * @whatsapp 2.2126.14:86018
 * @whatsapp 2.2136.9:92472
 * @whatsapp 2.2136.10:92472
 */
export declare interface StatusModel
  extends ModelProxy<Props, Session, Derived> {}

/**
 * @whatsapp 2.2126.14:86018
 * @whatsapp 2.2136.9:92472
 * @whatsapp 2.2136.10:92472
 */
export declare class StatusModel extends Model<StatusCollection> {
  idClass: typeof Wid;
  constructor(
    proterties?: ModelPropertiesContructor<StatusModel>,
    options?: ModelOptions
  );
  getCollection(): StatusCollection;
}

exportProxyModel(exports, 'StatusModel');