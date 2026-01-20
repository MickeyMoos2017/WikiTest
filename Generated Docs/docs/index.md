# 🚀 Bienvenue chez les CENG

Ce fichier **Markdown** sert de démonstration pour tester les fonctionnalités avec MkDocs.

dwdw

---

## 1. Comment on regle un probleme simple

### Je vous explique

Nous on est trop fort on a pas de **problèmes**, *ça c'est pour les* fabiles.

## 2. Listes

<div class="theme-ab" markdown="1">>

- Allan Bradley

</div>

<div class="theme-siemens" markdown="1">>

- Siemens

</div>

<div class="theme-moos" markdown="1">>

- Mickey Moos

- Tout les Tigers

    - Mid aged Tiger

    - Old Tiger

    - Bunny Tiger

</div>

### Liste numérotée

<div class="theme-ab" markdown="1">>

- Étape 1

- Étape 2

- Étape 3

</div>

<div class="theme-moos" markdown="1">

1. Étape A

2. Étape B

3. Étape C

</div>

## 2.5 Du code

<div class="theme-moos" markdown="1">

```cpp

void UnitStation::SequenceInitMotion::PrepareSequenceForExecution()

{

	// ----------------------------- Init ----------------------------- //

	// Sequence Status - Steps

	unit.statusInit1.Init(); // (1)

	unit.pvi.InitMotionStep = InitHolderGripper;

}

void UnitStation::SequenceInitMotion::SequenceExecute()

{

	// ----------------------------- MAIN ----------------------------- //

	// references

	SequenceCallStatus &status1 = unit.statusInit1;

	InitMotionSteps &step = unit.pvi.InitMotionStep;

	// Sequence status aborted

	if (status1.IsAborted() || status2.IsAborted())

	{

		SetStatusToAborted();

	}

	// Sequence Steps

	// MoveToInitPosition 	-> Move to last recorded position (recovery)

	// CheckInitMotionDone 	-> Check movement ncAxis done properly

	switch (step)

	{

	case InitHolderGripper:

	{

		status1 = Call(unit.slider.MoveToWork());

		step = MoveToInitPosition;

	}

	break;

	case MoveToInitPosition:

	{

		// calculate position

		if (unit.slideDone())

		{

		// Start axis movement

		status1 = Call(unit.linearAxis.MoveAbsolute(linearFinalPosition,

					   unit.pvi.ParamLinear.velocity,

					   unit.pvi.ParamLinear.acceleration,

					   unit.pvi.ParamLinear.deceleration,

					   ShortestWay));

		step = CheckInitMotionDone;

	}

	break;

	case CheckInitMotionDone:

	{

		unit.pvi.InitIsRequired = false;

		SetStatusToDone();

	}

	break;

	default :

		throw std::logic_error("unitStation::SequenceInitMotion: unknown step enumeration");

		break;

	}

}

```

1. ![image](https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v2/assets/emoticons/salute/default/20_f.png?v=v14)ici qu'on fait l'init

</div>

<div class="theme-ab" markdown="1">

```iecst

// ===== Thème AB : Rockwell / Studio 5000 (Structured Text) =====

// Calcule la somme d'un tableau et affiche en Logix

VAR

    Data : ARRAY[1..5] OF DINT := [1, 2, 3, 4, 5];

    Sum  : DINT := 0;

    i    : DINT;

END_VAR

FOR i := 1 TO 5 DO

    Sum := Sum + Data[i];

END_FOR;

// Exemple d'utilisation : assigner à une tag HMI

HMI_Sum := Sum;

```

</div>

<div class="theme-siemens" markdown="1">

```iecst

// Siemens TIA Portal ST

VAR i : INT; END_VAR

FOR i := 1 TO 10 DO

    // ...

END_FOR

```

</div>

---

## 3. Liens et images

[Lien vers une autre solution existante](https://mikron.sharepoint.com/sites/Dev/MOOS/SitePages/Home.page.aspx)

![Chat](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)

### Une video

 <video width="800" controls>

  <source src="Media/mes.mp4" type="video/mp4">

  Votre navigateur ne supporte pas la vidéo.

</video>

---

## 4. Citations

> Ceci est une citation inspirante en Markdown