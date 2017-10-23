<?php

/**
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * Vue
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */
$l = \OC::$server->getL10N('vue');
$g = \OC::$server->getURLGenerator();

\OC::$server->getNavigationManager()->add(
	[
		'id' => 'vue',
		'order' => 10,
		'href' => $g->linkToRoute('vue.page.index'),
		'name' => $l->t('Vue'),
	]
);
